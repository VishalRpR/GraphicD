"use client";

import { SidebarItem } from "@/features/editor/components/sidebar-item";
import {
  ImageIcon,
  LayoutTemplate,
  Settings,
  Shapes,
  Sparkle,
} from "lucide-react";
import { ActiveTool } from "@/features/editor/types";

interface SidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const Sidebar = ({ activeTool, onChangeActiveTool }: SidebarProps) => {
  return (
    <aside
      className="flex bg-white flex-col w-[100px] h-full border-r
    overflow-y-auto "
    >
      <ul className="felx flex-col">
        <SidebarItem
          icon={LayoutTemplate}
          label="Design"
          isActive={activeTool === "templates"}
          onClick={() => onChangeActiveTool("templates")}
        />
        <SidebarItem
          icon={ImageIcon}
          label="Image"
          isActive={activeTool === "images"}
          onClick={() => onChangeActiveTool("images")}
        />
        <SidebarItem
          icon={Shapes}
          label="Shapes"
          isActive={false}
          onClick={() => {}}
        />
        <SidebarItem
          icon={Sparkle}
          label="AI"
          isActive={false}
          onClick={() => {}}
        />
        <SidebarItem
          icon={Settings}
          label="Settings"
          isActive={false}
          onClick={() => {}}
        />
      </ul>
    </aside>
  );
};
