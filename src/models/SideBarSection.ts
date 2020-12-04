import Button from "@/models/button.ts";
import SideBarListElement from "@/models/button.ts";

export default interface SideBarSection {
  title: string;
  button?: Button;
  listElements: [SideBarListElement];
}
