import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "contained" | "text-only";
  className?: string;
}

const CustomButton = ({
  children,
  className,
  color = "primary",
  variant = "contained",
  onPress,
  onLongPress,
}: Props) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  const textColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[color];

  return variant === "text-only" ? (
    <Pressable
      className={`p-3 ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className={`text-center font-work-medium ${textColor}`}>
        {children}
      </Text>
    </Pressable>
  ) : (
    <Pressable
      className={`p-3 rounded-md active:opacity-90 ${btnColor} ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className="text-white text-center font-work-medium">
        {children}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
