import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
<section class="mt-5 py-5 absolute mx-auto d-block">
    <div class="text-center py-5">
        <h4><strong class="text-info">HELLO! </strong>W'RE</h4>
        <h1 class="display-1">GROUP TWO</h1>
        <h1 class="display-3">Job Portal Website</h1>
        <div>
          <Link to ={'/login'}>
            <button class="btn btn-info my-3 text-light">Learn More About Me</button></Link>
        </div>
        <div class="d-block mx-auto">
        </div>
    </div>
    </section>

    <div class="text-center text-muted">Copyright @2022 all rights Group Two</div>

    </div>
    
  )
}

export default Home