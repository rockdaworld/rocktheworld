import React from 'react';
import { Link } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor/nohighlight';

const code = `**Hello world!!!**`;

function BlogEditor() {
  const [value, setValue] = React.useState(code);

  return (
    <>
      <div className="container">
        <MDEditor value={value} onChange={setValue} />
      </div>

      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </>
  );
}
export default BlogEditor;
