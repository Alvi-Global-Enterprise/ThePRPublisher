/* eslint-disable react/prop-types */
function Dropdown({ children, noShape, className = "" }) {
	return <ul className={`sub-menu ${noShape ? "shape-none" : ""} ${className}`.trim()}>{children}</ul>;
}

export default Dropdown;
