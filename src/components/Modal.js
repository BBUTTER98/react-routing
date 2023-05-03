import ReactDOM from "react-dom";
function Modal({ onClose, children, actionBar }) {
	return ReactDOM.createPortal(
		<div
			onClick={onClose}
			className="absolute inset-0 bg-gray-300 opacity-80 flex items-center justify-center">
			<div className="p-10 bg-white opacity-100 grid gap-4">
				<div className="flex flex-col justify-between">{children}</div>
				<div className="flex justify-end">{actionBar}</div>
			</div>
		</div>,
		document.querySelector(".modal-container")
	);
}
export default Modal;
