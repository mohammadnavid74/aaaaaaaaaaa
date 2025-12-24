"use client";
import { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";
import L from "leaflet";
import "leaflet-polylinedecorator";
import { Image, Link } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  CMSCompanyStatus,
  CMSCompanySummaryDto,
} from "@/types/dtos/cmsCompany/CmsCompanyDataDto";

const statusMap: { [key: string]: number } = {
  active: 1,
  inactive: 2,
  suspended: 3,
  cancelled: 4,
};

interface MarkerProps {
  position: LatLngExpression;
  message: string;
  code: string;
  cmsCompanyStatus: number;
}

interface MapProps {
  updateSharedValue: (value: string) => void;
  cmsCompanies: CMSCompanySummaryDto[];
}

const Map = ({ updateSharedValue, cmsCompanies }: MapProps) => {
  const [isClient, setIsClient] = useState(false);
  const [zoom, setZoom] = useState(5);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(["all"]);
  const [filteredList, setFilteredList] = useState<CMSCompanySummaryDto[]>([]);

  const customIcon = new L.Icon({
    iconUrl: "/marker.webp",
    iconSize: [45, 45],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });

  const activeIcon = new L.Icon({
    iconUrl: "/active.webp",
    iconSize: [45, 45],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });
  const unActiveIcon = new L.Icon({
    iconUrl: "/inactive.webp",
    iconSize: [45, 45],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });
  const suspendedIcon = new L.Icon({
    iconUrl: "/suspended.webp",
    iconSize: [45, 45],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });
  const canceledIcon = new L.Icon({
    iconUrl: "/cancelled.webp",
    iconSize: [45, 45],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let filtered = cmsCompanies.filter(
      (item) => item.status !== CMSCompanyStatus.Deleted
    );
    if (!selectedStatuses.includes("all")) {
      const allowedStatuses = selectedStatuses.map((s) => statusMap[s]);
      filtered = filtered.filter((item) =>
        allowedStatuses.includes(item.status)
      );
    }
    setFilteredList(filtered);
  }, [cmsCompanies, selectedStatuses]);

  if (!isClient) return null;

  const markerPositions = filteredList.map((item) => [
    item.latitude,
    item.longitude,
  ]) as LatLngExpression[];
  const markerMessages = filteredList.map((item) => item.name);
  const iranBounds: [LatLngTuple, LatLngTuple] = [
    [25, 42], // جنوب غربی
    [40, 63], // شمال شرقی
  ];
  const tehranCoordinates: LatLngExpression = [35.70290756, 51.34975815];
  const yazdCoordinates: LatLngExpression = [31.8744, 54.3675];

  const MapWithCurves = ({
    markerPositions,
  }: {
    markerPositions: LatLngExpression[];
  }) => {
    const map = useMap();
    map.setZoom(zoom);
    useEffect(() => {
      map.eachLayer((layer: L.Layer) => {
        if (layer instanceof L.Polyline && !(layer instanceof L.Marker)) {
          map.removeLayer(layer);
        }
      });

      markerPositions.forEach((position) => {
        const latLngs = [tehranCoordinates, position];
        const polyline = L.polyline(latLngs, {
          color: "#c52f33",
          weight: 1,
          opacity: 0.4,
        }).addTo(map);

        L.polylineDecorator(polyline, {
          patterns: [
            {
              offset: 0,
              repeat: 0,
              symbol: L.Symbol.arrowHead({
                pixelSize: 2,
                pathOptions: {
                  fillOpacity: 1,
                  stroke: true,
                  color: "#c52f33",
                  weight: 2,
                },
              }),
            },
          ],
        }).addTo(map);
      });
    }, [map, markerPositions]); // ⬅️ اینجا markerPositions اضافه شده

    return null;
  };

  const MarkerWithZoom = ({
    position,
    message,
    code,
    cmsCompanyStatus,
  }: MarkerProps) => {
    const map = useMap();
    const markerRef = useRef<L.Marker | null>(null);
    useMapEvent("click", () => {
      if (markerRef.current) markerRef.current.closePopup();
    });

    const handleClick = () => {
      map.dragging.disable();
      map.flyTo(position, 12, { animate: true, duration: 1 });
      setTimeout(() => {
        setZoom(12);
        updateSharedValue(code);
        map.dragging.enable();
      }, 1500);
      if (markerRef.current) markerRef.current.openPopup();
    };

    const handleMouseOver = () => {
      if (markerRef.current) markerRef.current.openPopup();
    };

    const handleMouseOut = () => {
      if (markerRef.current) markerRef.current.closePopup();
    };

    let selectedIcon = customIcon;
    switch (cmsCompanyStatus) {
      case 1:
        selectedIcon = activeIcon;
        break;
      case 2:
        selectedIcon = unActiveIcon;
        break;
      case 3:
        selectedIcon = suspendedIcon;
        break;
      case 4:
        selectedIcon = canceledIcon;
        break;
    }

    return (
      <Marker
        position={position}
        icon={selectedIcon}
        ref={markerRef}
        eventHandlers={{
          click: handleClick,
          mouseover: handleMouseOver,
          mouseout: handleMouseOut,
        }}
      >
        <Popup>{message}</Popup>
      </Marker>
    );
  };

  const statuses = [
    { label: "همه", value: "all" },
    { label: "فعال", value: "active" },
    { label: "غیرفعال", value: "inactive" },
    { label: "تعلیق شده", value: "suspended" },
    { label: "لغو شده", value: "cancelled" },
  ];

  const handleChange = (value: string) => {
    setZoom(5);
    if (value === "all") {
      setSelectedStatuses(["all"]);
    } else {
      let newStatuses = selectedStatuses.includes("all")
        ? []
        : [...selectedStatuses];
      newStatuses = newStatuses.includes(value)
        ? newStatuses.filter((s) => s !== value)
        : [...newStatuses, value];

      if (newStatuses.length === 0) newStatuses = ["all"];
      setSelectedStatuses(newStatuses);
    }
  };

  return (
    <MapContainer
      maxBounds={iranBounds}
      className="h-[calc(100vh)] z-0 top-0  "
      center={yazdCoordinates}
      zoom={1}
      minZoom={5}
      style={{ width: "100%", position: "absolute" }}
    >
      <div className="absolute w-full md:w-fit  !bottom-0   left-0 p-3 md:rounded-lg dark:bg-opacity-70 rounded-t-lg md:!bottom-5 md:left-4 z-[999]  bg-white dark:bg-black">
        <div className="pb-1 border-b flex justify-between  items-center border-danger">
          <Link
            className="!text-white border p-1 rounded-lg bg-danger"
            href="/"
          >
            <Icon icon="mingcute:home-2-line" width="24" height="24" />
            صفحه اصلی
          </Link>
          <h1 className="text-lg  text-center "> : راهنمای نقشه </h1>
        </div>
        <div
          dir="rtl"
          className="flex flex-wrap justify-center  gap-4 p-2 border-b dark:border-white/20 border-danger"
        >
          {statuses.map((status) => (
            <label
              key={status.value}
              className="flex justify-end flex-col items-center gap-2 cursor-pointer"
            >
              <Image
                className="w-[40px]"
                src={`https://app.requestly.io/delay/5000//${status.value}.webp`}
                alt="map"
              />
              <div className="flex justify-center flex-col">
                <label className="text-xs sm:text-sm">{status.label}</label>
                <input
                  aria-label={status.label}
                  type="checkbox"
                  checked={selectedStatuses.includes(status.value)}
                  onChange={() => handleChange(status.value)}
                  className="accent-danger"
                />
              </div>
            </label>
          ))}
        </div>
      </div>
      {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      <MapWithCurves markerPositions={markerPositions} />
      {markerPositions.map((position, i) => (
        <MarkerWithZoom
          key={i}
          position={position}
          message={markerMessages[i]}
          code={filteredList[i].code}
          cmsCompanyStatus={filteredList[i].status}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
