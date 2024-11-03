class My_block {
    getInfo() {
      return {
        id: 'hello',
          name: 'Hello world!',
        blocks: [
          {
            opcode: 'hello',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Hello, world!'
          }
        ]
      };
    }
    hello() {
      return 'Hello, world!';
    }
  }
  Scratch.extensions.register(new My_block());