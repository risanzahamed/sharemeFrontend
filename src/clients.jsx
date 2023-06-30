import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
 projectId : "49n8tx3n",
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token : "skkV5AR07L1U3wbkTAe4tWyKkV43UkyJKrCHmur9iGUa1heYNgj8J9iWFp8FzT5ZQvuUGChokX2tHCtWW0NF5ZMXsuNS25JScaKJTEdFWq7OidEZvlxduuhJGGWNSm0UuURJaPGqQzNdQBHP4XTEE3GsHGBR6s9yIPmLYvD11gq5TcxnOFp5"

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);