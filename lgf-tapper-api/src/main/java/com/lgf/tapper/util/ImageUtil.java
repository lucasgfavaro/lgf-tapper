package com.lgf.tapper.util;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.nio.ByteBuffer;

import javax.imageio.ImageIO;

import com.amazonaws.services.rekognition.model.Image;
import com.amazonaws.util.Base64;

public class ImageUtil {

	public static Image convertStringToImage(String image) {

		ByteBuffer byteBuffer = null;

		try {
			byte[] imageByte = Base64.decode(image.split(",")[1]);
			ByteArrayInputStream bis = new ByteArrayInputStream(imageByte);
			BufferedImage bufferedImage = ImageIO.read(bis);
			bis.close();
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			ImageIO.write(bufferedImage, "png", baos);
			byteBuffer = ByteBuffer.wrap(baos.toByteArray());
		} catch (Exception e) {
			e.printStackTrace();
		}

		return new Image().withBytes(byteBuffer);
	}
	
}
