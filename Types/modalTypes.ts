export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  message: string | React.ReactNode;
  animationType?: "none" | "slide" | "fade";
  presentationStyle?: "pageSheet" | "formSheet" | "overFullScreen";
  // transparent?: boolean;
  onDismiss?: () => void;
  onShow?: () => void;
  backdropColor?: string | undefined;
  backdropOpacity?: number | undefined;
  swipeDirection?: "up" | "down" | "left" | "right";
  onSwipeComplete?: () => void;
  keyboardAvoiding?: boolean;
}
