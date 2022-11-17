import { useEffect, useState} from 'react';
import styles from './Folders.module.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {
    addToList, deleteFoldersState,
} from '../Folders/foldersSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'



export function Folders() {
    const dispatch = useAppDispatch();
    const [folder, setFolder] = useState<any>('');
    const { folder: userValue } = useAppSelector(state => state.folders)


    const handleAddToDoList = () => {
        if(folder.trim().length) {
            dispatch(addToList(folder));
            setFolder('');
        }
    }
    const handleDeleteAllFolders = () => {
        dispatch(deleteFoldersState(folder));
    }

    return (
            <div>
                <h1>Folders area</h1>
                <input type="text" value={folder} placeholder='Enter folder name...' onChange={(e) => setFolder(e.target.value)} />
                <button className={styles.new_folder_btn} onClick={handleAddToDoList}>New folder + </button>
                <button className={styles.delete_folders} onClick={handleDeleteAllFolders}>
                    Delete all folders
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>

    );
}
