const box = new class {
    locked = true;
    _content = [];
  
    unlock() { this.locked = false; }
    lock() { this.locked = true;  }
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    let locked = box.locked;
	if (!locked) {
		return body();
	}

	box.unlock();
	try {
		return body();
	} finally {
		box.lock();
	}
  }
  
  withBoxUnlocked(() => {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(() => {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  console.log(box.locked);
