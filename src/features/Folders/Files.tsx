import { useEffect, useState} from 'react';
import styles from './Files.module.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {
     addToListFile, deleteFilesState, deleteFoldersState,
} from '../Folders/foldersSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'



export function Files() {
    const dispatch = useAppDispatch();
    const [file, setFile] = useState<any>('');
    const { file: fileValue} = useAppSelector(state => state.folders)



    const handleAddToDoListFile = () => {
        if(file.trim().length) {
            dispatch(addToListFile(file));
            setFile('');
        }
    }

    const handleDeleteAllFiles = () => {
        dispatch(deleteFilesState(file));
    }



    return (
            <div>
                <h1>Files area</h1>
                <input type="text" value={file} placeholder='Enter file name...' onChange={(e) => setFile(e.target.value)} />
                <button className={styles.new_folder_btn} onClick={handleAddToDoListFile}>New File + </button>
                <button className={styles.delete_folders} onClick={handleDeleteAllFiles}>
                    Delete all files
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
    );
}
