import { keyframes } from "styled-components";

const PlaneEvent = keyframes`
    0% {
        top: 52%;
        left: -25%
    }

    50% {
        transform: rotate( 30deg );
    }

    100% {
        transform: translate(-50%, -50%)
    }
`;

export { PlaneEvent };
