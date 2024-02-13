import { ButtonComponent } from './styled.js';

const Button = ({ buttonText, ...props }) => (
    <ButtonComponent {...props}>
        {buttonText}
    </ButtonComponent>
);

export default Button;