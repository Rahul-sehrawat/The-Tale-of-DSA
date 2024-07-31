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

    handleLinkedList() {
      const message = this.createChatBotMessage("A linked list is a linear data structure where each element is a separate object called a node. Each node contains data and a reference (or link) to the next node in the sequence.");
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }

    handleHashTable() {
      const message = this.createChatBotMessage("A hash table is a data structure that maps keys to values using a hash function. It allows for fast insertion, deletion, and lookup of elements.");
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }

    handleGraph() {
      const message = this.createChatBotMessage("A graph is a collection of nodes (vertices) and edges that connect pairs of nodes. It can be directed or undirected, and may contain cycles.");
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }

    handleGreedy() {
      const message = this.createChatBotMessage("A greedy algorithm builds up a solution piece by piece, always choosing the next piece that offers the most immediate benefit. It is often used for optimization problems.");
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
    handleDP() {
      const message = this.createChatBotMessage("Dynamic programming is an optimization technique that solves problems by breaking them down into simpler subproblems and storing the results of these subproblems to avoid redundant calculations.");
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }










  }
  
  export default ActionProvider;
  