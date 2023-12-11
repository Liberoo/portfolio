import { urlForImage } from '../sanity/urlForImage';

const {asset, alt} = Astro.props.node

const url = urlForImage(asset).url()
const webpUrl = urlForImage(asset).format('webp').url()

---

<picture>
  <source
    srcset={webpUrl}
    type="image/webp"
  />
  <img
    class="responsive__img"
    src={url}
    alt={alt}
  />
</picture>