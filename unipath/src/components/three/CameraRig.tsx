import { ReactNode } from "react";

type CameraRigProps = {
  children: ReactNode;
};

export function CameraRig({ children }: CameraRigProps) {
  return <>{children}</>;
}