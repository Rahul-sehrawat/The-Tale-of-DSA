class MessageParser {
    actionProvider: any;
  
    constructor(actionProvider: any) {
      this.actionProvider = actionProvider;
    }
  
    parse(message: string) {
      const lowercase = message.toLowerCase();
      if (lowercase.includes('hello') || lowercase.includes('hi') || lowercase.includes('hey')) {
            this.actionProvider.handleHello();
        } 
    }
  }
  
  export default MessageParser;
  