import { useContext } from "react";
import styles from './add.module.scss';
import { useDropboxChooser } from 'use-dropbox-chooser'
import { useState } from "react";


export function AddItem() {
  const { open, isOpen } = useDropboxChooser({
    appKey: 'w5lbt5pc42jrm20',
    // chooserOptions: { multiple: true, linkType: 'direct' },
    onSelected: files => {
      console.log(files)
    },
  })

  return (<>
    {/*<img src='' />*/}

    <button onClick={open} disabled={isOpen}>
      Choose from Dropbox
    </button>
    </>
  )
}
