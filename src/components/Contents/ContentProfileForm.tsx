import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "./styled";
import { FormRestaurant } from "components/Forms/FormRestaurant";
import { useState } from "react";

export const ContentProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        Profile
      </FontsDefault.H2>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "calc(100vh - 20px - 100px)",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            border: "1px solid #ccc",
            maxWidth: "800px",
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <FormRestaurant
            isLoading={isLoading}
            onSubmit={(values) => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 500);
              console.log(values);
            }}
          />
        </div>
      </div>
    </StyledContentP>
  );
};
