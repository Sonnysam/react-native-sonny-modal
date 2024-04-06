import { ViewStyle } from "react-native";
export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string | React.ReactNode;
  message: string | React.ReactNode;
  style?: ViewStyle;
  animationType?: "none" | "slide" | "fade";
  presentationStyle?: "pageSheet" | "formSheet" | "overFullScreen";
  onDismiss?: () => void;
  onShow?: () => void;
  backdropColor?: string | undefined;
  backdropOpacity?: number | undefined;
  swipeDirection?: "up" | "down" | "left" | "right";
  onSwipeComplete?: () => void;
  keyboardAvoiding?: boolean;
}
