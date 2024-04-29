import { blockContact } from "@/api/contacts";
import Modal from "@/components/modals/Modal";
import { useChatContext } from "@/contexts/chat-context";
import { useChatMessageContext } from "@/contexts/chat-message-context";
import { useModalContext } from "@/contexts/modal-context";
import { Chat } from "@/types/chat";
import { Fragment } from "react";

export default function BlockContactConfirmation() {
  const { closeModal, data: chat } = useModalContext<Chat>();
  const { chats, setChats } = useChatContext();
  const { user, setUser } = useChatMessageContext();

  if (!chat) return;

  const handleblockContact = () => {
    blockContact(chat.id).then(() => {
      setChats(
        chats.map((c) => {
          if (c.id === chat.id) {
            c.is_contact_blocked = true;
          }

          return c;
        }),
      );

      if (user && user.id === chat.id) {
        setUser({ ...user, is_contact_blocked: true });
      }

      closeModal();
    });
  };

  return (
    <Modal>
      <Modal.Header title="Block Contact?" onClose={closeModal} />
      <Modal.Body as={Fragment}>
        <p>
          This contact will be removed from your contacts. You can save the
          contact once you open again the block.
        </p>
      </Modal.Body>

      <Modal.Footer className="flex justify-between gap-4">
        <button className="btn btn-secondary flex-1" onClick={closeModal}>
          Cancel
        </button>
        <button className="btn btn-danger flex-1" onClick={handleblockContact}>
          Block
        </button>
      </Modal.Footer>
    </Modal>
  );
}