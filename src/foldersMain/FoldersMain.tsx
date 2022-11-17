import {Folders} from "../features/Folders/Folders";
import {useAppSelector} from "../app/hooks";
import {useDispatch} from "react-redux";
import styles from './Folders.module.css';

import background from "../assets/images/folder.png";
import fileImage from "../assets/images/file.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {removeFile, removeFolder} from "../features/Folders/foldersSlice";
import {Files} from "../features/Folders/Files";

const FoldersMain = (): JSX.Element => {
    const dispatch = useDispatch();
    const { folder, file } = useAppSelector(state => state.folders);



    return (
        <>
            <div>
                <Folders/>
                <div className={styles.folders_area}>

                    {folder?.map((item, id) => (
                        <div key={id} className={styles.folders_parent}>
                            <FontAwesomeIcon icon={faTrash} onClick={() => dispatch(removeFolder(item))} className={styles.delete_one}/>
                            <div style={{backgroundImage: `url(${background})` }} className={styles.folder_box}></div>
                            <p> {item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Files/>
                <div className={styles.folders_area}>
                    {file?.map((file, id) => (
                        <div key={id} className={styles.folders_parent}>
                            <FontAwesomeIcon icon={faTrash} onClick={() => dispatch(removeFile(file))} className={styles.delete_one}/>
                            <div style={{backgroundImage: `url(${fileImage})` }} className={styles.folder_box}></div>
                            <p> {file.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FoldersMain;