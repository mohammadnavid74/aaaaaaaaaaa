export interface ICommodity {
  hierarchyId: string;
  code: string;
  title: string;
  iconId: string;
  hasChildren: boolean;
  level: number;
  props: IProps[];
  images: ICommodityImage[];
  children: ICommodity[];
  id: string;
  creationDateTime: string;
  creationDatePersian: string;
  creationTimePersian: string;
}
export interface IProps {
  propType: number;
  parent: string;
  inherited: boolean;
  title: string;
  value: string;
}
export interface ICommodityImage {
  title: string;
  fileId: string;
  commodityId: string;
  id: string;
  creationDateTime: string;
  creationDatePersian: string;
  creationTimePersian: string;
}
