import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Comment from 'src/containers/Picture/Comment';
import { Link } from 'react-router-dom';

import './picture.scss';
import Loading from '../Loading';

const Picture = ({
  isLogged,
  userId,

  fetchPostWithId,
  isReady,
  picture,
  resetPicture,
  pageId,

  displayComments,
  changeDisplay,
  manageSubmitComment,
  changeNewComment,
  newComment,

  addUserLike,
  removeUserLike,
}) => {

  useEffect(
    fetchPostWithId,
    [],
  );

  function changeLike() {
    if (picture.userLike.find((likes) => likes.id == userId)) {
      removeUserLike(picture.id);
    }
    else {
      addUserLike(picture.id);
    }
  }

  if (!isReady || picture.id != pageId) {
    return (
      <div className="picture">
        <Loading />
      </div>
    );
  }

  const handleSubmitComment = (evt) => {
    evt.preventDefault();

    manageSubmitComment(picture.id);
  };

  return (
    <div className="picture">

      <div className="picture-top">
        <div className="picture-top-title">{picture.title}</div>
        <Link to="/categories">
          <button
            type="button"
            className="picture-top-close"
            onClick={() => resetPicture()}
          >
            Retour aux catégories <i className="bi bi-box-arrow-in-right" />
          </button>
        </Link>
      </div>

      <div className="picture-img">
        <img src={`https://back.nos-amis-les-animaux.fr/uploads/pictures/${picture.picture}`} alt="" />
      </div>

      <div className="picture__bottom">
        <div className="picture__bottom-links">
          {isLogged
            && (
            <button
              type="button"
              onClick={() => changeLike()}
            >
              <i className={picture.userLike.find((likes) => likes.id == userId) ?"bi bi-heart-fill selected" : "bi bi-heart-fill"} />
            </button>
            )}
          <button
            type="button"
            onClick={() => (changeDisplay())}>
            <i className={displayComments ? "bi bi-chat-left-text-fill selected" : "bi bi-chat-left-text-fill" } />
          </button>
        </div>

        <div className={displayComments ? 'picture__bottom-comments active' : 'picture__bottom-comments'}>
          {isLogged
            && (
            <form
              className="picture__bottom-comments-add"
              onSubmit={handleSubmitComment}
            >
              <textarea
                value={newComment}
                onChange={(evt) => changeNewComment(evt.target.value)}
              />
              <button type="submit">Poster</button>
            </form>
            )}            
            {!isLogged &&
            <p className="picture__bottom-comments-add">Vous devez être connecté pour pouvoir commenter et aimer les photos de nos amis ! <Link to="/connexion"><button>Se connecter</button></Link></p>
            }
          {displayComments && (
            <div className="picture__bottom-comments-section">

              {picture.comment.map((comment) => (
                <Comment
                  key={comment.id}
                  nickname={comment.user.nickname}
                  description={comment.description}
                  createdAt={comment.createdAt}
                />
              ))}
              { (picture.comment == null || picture.comment === '' || picture.comment === undefined || picture.comment.length == 0)
                && <p>Soyez le premier à laisser un commentaire ! <i className="bi bi-emoji-wink-fill" /></p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Picture.propTypes = {
  resetPicture: PropTypes.func.isRequired,
  fetchPostWithId: PropTypes.func.isRequired,
  isReady: PropTypes.bool.isRequired,
  picture: PropTypes.shape({
      pictureBase64: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nickname: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  displayComments: PropTypes.bool.isRequired,
  changeDisplay: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Picture;
