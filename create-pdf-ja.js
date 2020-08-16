const { mdToPdf } = require('md-to-pdf')
const func = async () => {
  try {
    mdToPdf({ path: 'ja/README.md' }, { dest: 'ja/README.pdf' }).then(() => {
      console.log('mtp Done')
    })
  } catch (e) {
    console.log(e)
  }
}

func()
