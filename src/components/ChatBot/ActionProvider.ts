class ActionProvider {
    createChatBotMessage: any;
    setState: any;
  
    constructor(createChatBotMessage: any, setStateFunc: any) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHello() {
      const message = this.createChatBotMessage("Hello! How can I assist you today?");
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  