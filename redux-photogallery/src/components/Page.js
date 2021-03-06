import React, {PropTypes, Component} from 'react'

export class Page extends Component {

    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.innerText)
    }

    render() {
        const {year, photos, loaded} = this.props
        return <div className='ib page'>
            <p>
                <button className='btn' onClick={::this.onYearBtnClick}>2016</button>
                {' '}
                <button className='btn' onClick={::this.onYearBtnClick}>2015</button>
                {' '}
                <button className='btn' onClick={::this.onYearBtnClick}>2014</button>
            </p>
            <h3>{year} год</h3>
            {
                loaded ?
                    <p>Загрузка</p>
                    :
                    <p>У тебя {photos.length} фото.</p>
            }

        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    loaded: PropTypes.bool.isRequired,
    getPhotos: PropTypes.func.isRequired
}
