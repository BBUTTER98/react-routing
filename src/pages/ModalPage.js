import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
	const [showModal, setShowModal] = useState(false);
	const handleClick = () => {
		setShowModal(true);
	};
	const handleClose = () => {
		setShowModal(false);
	};
    useEffect(()=>{
        document.body.classList.remove(!showModal ? "overflow-hidden" : "overflow-auto");
        document.body.classList.add(showModal ? "overflow-hidden" : "overflow-auto");
    },[showModal])
	const actionButton = (
		<Button primary className="opacity-100" onClick={handleClose}>
			I accept
		</Button>
	);
	const modal = (
		<Modal onClose={handleClose} actionBar={actionButton}>
			<p>Here is an important agreement for you to accept</p>
		</Modal>
	);
	return (
		<div>
			<Button primary onClick={handleClick}>
				Open Modal
			</Button>
			{showModal && modal}
            

		</div>
	);
}
export default ModalPage;
