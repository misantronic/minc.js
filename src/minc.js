/**
 *
 * @param {Array} a An Array containing the URLs/Paths to your scripts
 * @param {Array} [b] An Array containing the URLs/Paths to you fallback-scripts
 * @param [i] placeholder
 * @returns {Function}
 * @constructor
 */
Minc = function(a, b, i) {
	return (function _(r) {
		/**
		 * Success method when all scripts are loaded
		 * @param {Function} c callback
		 */
		_.done = function(c) {
			r = c
		}

		/**
		 *
		 * @param {String} c
		 * @param [d] placeholder
		 */
		!function l(c, d, g, h) {
			with(document)
				(d=createElement('script')).src = c.replace(/https*:/, ""),
				head.appendChild(d),
				d.onload = d.onreadystatechange = d.onerror = function(e) {
					e.type == 'error' && b[i]
						? l(b[i])
						: !h && e.type == 'load' || e[g="readyState"] == 'loaded' || e[g] == 'complete' ?
						h=1&&a[++i] ? l(a[i]) : r && r() : 0
				}
		}(a[i=0])

		return _
	})()
}