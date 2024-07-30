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
      if (lowercase.includes('dsa')) {
        this.actionProvider.handleDsa();
        }
      if (lowercase.includes('two sum')) {
        this.actionProvider.handleTwoSum();
        }

      if (lowercase.includes('reverse')) {
        this.actionProvider.handleReverseLinkedList();
        }

      if (lowercase.includes('house robber 1')) {
        this.actionProvider.handleHouseRobber1();
        }
      
      if (lowercase.includes('linked list')) {
        this.actionProvider.handleLinkedList();
        }
      if (lowercase.includes('hash table')) {
        this.actionProvider.handleHashTable();
        }


        











    }
  }
  
  export default MessageParser;
  