import { generatePath } from "react-router-dom";

export const generateApiPath = (
  path: string,
  entity: Record<string, string>
) => {
  return generatePath(path, entity) + "/";
};
