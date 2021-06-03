import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import OutStock from './OutStock';
const ModalExampleScrollingContent = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<Modal
			closeIcon
			open={open}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			trigger={
				<Button icon size='big' primary>
					<Icon name='bell' />
				</Button>
			}
		>
			<Modal.Header>Notificaciones</Modal.Header>
			<Modal.Content scrolling>
				Los siguientes componentes se encuentran fuera de stock
				<Modal.Description>
					<OutStock />
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default ModalExampleScrollingContent;
