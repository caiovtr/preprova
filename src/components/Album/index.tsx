import { useEffect, useState } from "react";
import * as MediaLibray from 'expo-media-library'
import { Image, Text, View} from 'react-native'
import { Painel } from "./style";

interface IAlbum {
    album: MediaLibray.Album
}

export function Album({album}: IAlbum) {
    const [assets, setAssets] = useState<MediaLibray.Asset[]>([])

    useEffect(() => {
        async function getAlbumAssets() {
            const albumAssets = await MediaLibray.getAssetsAsync({album})
            setAssets(albumAssets.assets)
        }
        getAlbumAssets()
    }, [album])

    return (
        <View key={album.id} style={Painel.albumContainer}>
      <Text>
        {album.title} - {album.assetCount ?? 'no'} assets
      </Text>
      <View style={Painel.albumAssetsContainer}>
        {assets && assets.map((asset) => (
          <Image source={{ uri: asset.uri }} width={50} height={50} />
        ))}
      </View>
    </View>
    )
}