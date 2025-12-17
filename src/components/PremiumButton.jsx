import styled from "styled-components";
import { Crown } from "lucide-react";

const PremiumButton = () => {
  return (
    <StyledWrapper>
      <button className="Btn">
        <Crown className="logoIcon" />
        <span className="tooltip">Featured</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
    background: #afa8ba;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    transition-duration: 0.5s;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.11);
    padding: 0;
  }

  .logoIcon {
    stroke: #000080;
    fill: #000080;
    width: 14px;
    height: 14px;
  }

  .tooltip {
    position: absolute;
    top: -25px;
    opacity: 0;
    background: #000080;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.2s;
    pointer-events: none;
    letter-spacing: 0.3px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
  }

  .tooltip::before {
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    background: #000080;
    transform: rotate(45deg);
    bottom: -8%;
    transition-duration: 0.3s;
  }

  .Btn:hover .tooltip {
    top: -40px;
    opacity: 1;
    transition-duration: 0.3s;
  }

  .Btn:hover {
    background: #9d95aa;
    transition-duration: 0.5s;
  }
`;

export default PremiumButton;
