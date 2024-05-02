import InputMessage from "./input_message/InputMessage";
import PropTypes from "prop-types";

export default function MessageComposer({ setSendMessage }) {
  return (
    <>
      <InputMessage setSendMessage={setSendMessage} />
    </>
  );
}

MessageComposer.propTypes = {
  setSendMessage: PropTypes.func.isRequired,
};
