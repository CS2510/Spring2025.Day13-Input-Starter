class Input{
    static keysdown = []

    static keydown(event) {
      if (!Input.keysdown.includes(event.code))
        Input.keysdown.push(event.code)
    }

    static keyup(event) {
      let index = Input.keysdown.indexOf(event.code)
      Input.keysdown.splice(index, 1)
    }
}
