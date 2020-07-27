/**
 * list of all the routes on front end page
 */
export default class Routes {
  public static search = "/search";
  public static submission = "/submission";
  public static privacy = "/privacy";
  public static termsOfCondition = "/termsOfCondition";
  public static cameraPage = "/cameraPage";
}

export interface IAvailablePage {
  name: string;
  page: Pages;
  path: string;
}

export enum Pages {}

export const availablePages: IAvailablePage[] = [];
