const { mdToPdf } = require('md-to-pdf')
const func = async () => {
  try {
    mdToPdf({ path: 'README.md' }, { dest: 'README.pdf' }).then(() => {
      console.log('mtp Done')
    })
  } catch (e) {
    console.log(e)
  }
}

func()
