import Icon from './Icon.js';

const DevIcon = ({ tech, size }) => (
    <div
        className="dev-icon-container"
        style = {{
            height: size,
            width: size
        }}
    >
        <div className="dev-icon">
            <Icon name={tech} size={size}></Icon>
        </div>
        <div className="dev-icon-tooltip">{tech}</div>
    </div>
)

export default DevIcon;
