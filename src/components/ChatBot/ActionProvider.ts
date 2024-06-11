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

    handleDsa() {
      const message = this.createChatBotMessage("DSA stands for Data Structures and Algorithms. It involves organizing data efficiently and developing algorithms to solve problems effectively, which is essential for computer programming and software development.");
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }

    handleTwoSum() {
      const message = this.createChatBotMessage("Hint: The way to approach this problem is to iterate over every single item in the array and find difference between target and current number being processed.");
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }

    handleReverseLinkedList() {
      const message = this.createChatBotMessage("Hint: The idea is to use three pointers curr, prev, and forward to keep track of nodes to update reverse links.");
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }

    handleHouseRobber1() {
      const message = this.createChatBotMessage("Hint:When robbing houses, we must ensure that we do not rob two adjacent houses to avoid detection. Therefore, at each house(n), we have a choice: either rob that house(n) and the one before the previous house(n-2), or skip the current house and just rob the previous one(n-1). This strategy helps us maximize our total loot while maintaining the constraint of not robbing adjacent houses.");
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }










  }
  
  export default ActionProvider;
  