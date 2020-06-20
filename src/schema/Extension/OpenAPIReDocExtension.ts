import { TagGroup } from '../TagGroup';

export interface OpenAPIReDocExtension {
  'x-ignoredHeaderParameters'?: string[];
  'x-tagGroups'?: TagGroup[];
}
