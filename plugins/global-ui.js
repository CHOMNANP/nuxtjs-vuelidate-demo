import Vue from 'vue'

export default ({ app, store }) => {
  /**
   * auto register all component prefix with uk-, sd- and the- under ui folder
   */
  const requireComponent = require.context(
    '../components',
    true,
    // /(zcom1-|zcom2-|zcom3-)[\w-]+\.vue$/
    /(zsd-)[\w-]+\.vue$/
  )
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = _.upperFirst(
      _.camelCase(fileName.replace(/^\.\/global\//, '').replace(/\.\w+$/, ''))
    )
    Vue.component(componentName, componentConfig.default || componentConfig)
  })

  // eslint-disable-next-line no-extend-native
  String.prototype.args = function () {
    let i = 0
    const args = arguments
    return this.replace(/{}/g, function () {
      return args[i] !== 'undefined' ? args[i++] : ''
    })
  }
}
