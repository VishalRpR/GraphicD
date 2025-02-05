import { fabric } from "fabric";
interface UseCanvasEventsProps {
  canvas: fabric.Canvas | null;
  container: HTMLDivElement | null;
  setSelectecObjects: (objects: fabric.Object[]) => void;
}
export const useCanvasEvents = ({
    canvas,container,setSelectecObjects
}:UseCanvasEventsProps) => {};
