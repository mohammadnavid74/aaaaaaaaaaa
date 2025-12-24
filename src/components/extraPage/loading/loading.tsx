import { Image } from "@heroui/image";

const Loading = () => {
  return (
    <div className="backdrop-blur-lg fixed left-0 h-screen top-0  w-screen z-[1001] bg-stone-200 dark:bg-black/30   flex justify-center items-center">
      <Image
        src="/logo3.webp"
        width={200}
        height={200}
        alt="A_1"
        className="animate-spinner-ease-spin"
      ></Image>
    </div>
  );
};

export default Loading;
