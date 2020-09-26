import React, { PureComponent } from "react";
import styled from "styled-components";
import IgIcon from "../../assets/icons/instagram.svg";
import FbIcon from "../../assets/icons/facebook.svg";
import YtIcon from "../../assets/icons/youtube.svg";

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 165px;
`;
class SocialLinks extends PureComponent {
  icons = [
    {
      name: "Facebook",
      icon: FbIcon,
      link: "https://www.facebook.com/TaniaLucelyO/",
    },
    {
      name: "Instagram",
      icon: IgIcon,
      link: "https://www.instagram.com/Tania_Lucely/",
    },
    {
      name: "Youtube",
      icon: YtIcon,
      link: "https://www.youtube.com/TaniaLucely",
    },
  ];
  render() {
    return (
      <LinksContainer>
        {this.icons.map(({ link, icon, name }, i) => {
          return (
            <a href={link} key={i}>
              <img src={icon} alt={name} />
            </a>
          );
        })}
      </LinksContainer>
    );
  }
}
// const SocialLinks = () => {
//   const Icons = [
//     {
//       name: "Facebook",
//       icon: FbIcon,
//       link: "https://www.facebook.com/TaniaLucelyO/",
//     },
//     {
//       name: "Instagram",
//       icon: IgIcon,
//       link: "https://www.instagram.com/Tania_Lucely/",
//     },
//     {
//       name: "Youtube",
//       icon: YtIcon,
//       link: "https://www.youtube.com/TaniaLucely",
//     },
//   ];
//   return (
//     <LinksContainer>
//       {Icons.map(({ link, icon, name }, i) => {
//         return (
//           <a href={link} key={i}>
//             <img src={icon} alt={name} />
//           </a>
//         );
//       })}
//     </LinksContainer>
//   );
// };

export default SocialLinks;
