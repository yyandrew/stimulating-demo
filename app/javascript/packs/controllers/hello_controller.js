import { Controller } from 'stimulus';

export default class extends Controller {
  // Trigge after events#index.html.haml page rendered
  initialize () {
    this.targets.find('name').value = this.name
  }

  // Trigge by click Log button
  log () {
    console.log(this.targets.find('name').value)
  }

  // Trigge after press Ctrl+C keys
  paste(event) {
    event.preventDefault()
    console.log('Paste are not allowed')
  }

  get name() {
    if (this.data.has('name')) {
      return this.data.get('name')
    } else {
      return 'Default User'
    }
  }
}