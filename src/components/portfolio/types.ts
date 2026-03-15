type BaseProjectItem = {
  title: string;
  imageSrc?: string;
  thumbnailSrc?: string;
  imageAlt?: string;
};

export type ProjectTypeItem = BaseProjectItem & {
  type: "project";
  shortDescription: string;
  pagePath: string;
};

export type ImageTypeItem = BaseProjectItem & {
  type: "image";
};

export type ProjectItem = ProjectTypeItem | ImageTypeItem;
