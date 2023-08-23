import styles from "./ArticleNote.module.css";
import {ArticleNoteProps} from "./ArticleNote.props";
import cn from 'classnames';

const ArticleNote = ({className, children}: ArticleNoteProps) => {

  return (
      <div className={cn(styles.article__note, className)}>
          <p className={styles.article__note_text}>
              {children}
          </p>
      </div>
  );
};

export default ArticleNote;
