import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

// interfaces
import IRecipe from '../../ts/interfaces/IRecipe';

// components
import RecipeHeading from '../Recipe/RecipeHeading';

const RecipeShareButtons = (props: { recipe: IRecipe }) => {
  const { name, category, thumbnail } = props.recipe;
  const iconSize = 40;
  const url: string = window.location.href;

  return (
    <RecipeHeading title="Share">
      <ul className="main__list main__list--horizontal">
        <li className="main__list-item" data-testid="share-button">
          <EmailShareButton
            subject={`CookBook recipe: ${name}`}
            body="Hi! I want to share this recipe with you, just look!"
            url={url}
          >
            <EmailIcon size={iconSize} />
          </EmailShareButton>
        </li>
        <li className="main__list-item" data-testid="share-button">
          <FacebookShareButton
            quote={`CookBook recipe: ${name}`}
            hashtag={`#CookBook`}
            url={url}
          >
            <FacebookIcon size={iconSize} />
          </FacebookShareButton>
        </li>
        <li className="main__list-item" data-testid="share-button">
          <PinterestShareButton
            description={`CookBook recipe: ${name}`}
            media={thumbnail}
            url={url}
          >
            <PinterestIcon size={iconSize} />
          </PinterestShareButton>
        </li>
        <li className="main__list-item" data-testid="share-button">
          <TelegramShareButton title={`CookBook recipe: ${name}`} url={url}>
            <TelegramIcon size={iconSize} />
          </TelegramShareButton>
        </li>
        <li className="main__list-item" data-testid="share-button">
          <TwitterShareButton
            title={`CookBook recipe: ${name}`}
            hashtags={[`${category}`, `recipe`, 'CookBook', `${name}`]}
            url={url}
          >
            <TwitterIcon size={iconSize} />
          </TwitterShareButton>
        </li>
        <li className="main__list-item" data-testid="share-button">
          <WhatsappShareButton title={`CookBook recipe: ${name}`} url={url}>
            <WhatsappIcon size={iconSize} />
          </WhatsappShareButton>
        </li>
      </ul>
    </RecipeHeading>
  );
};

export default RecipeShareButtons;
