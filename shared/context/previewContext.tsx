import { ReactNode, createContext, useState } from 'react';
import { MediaType } from '../types/types';

type InitialValues = {
	previewData: boolean | MediaType;
	setPreviewData: React.Dispatch<React.SetStateAction<any>>;
}

const initialValues: InitialValues = {
	previewData: false,
	setPreviewData: () => {}
};

export const PreviewContext = createContext(initialValues);

type Props = {
	children: ReactNode
}

export const PreviewContextWrapper = (props: Props) => {
	const { children } = props;

	const [previewData, setPreviewData] = useState(false);

	return (
		<PreviewContext.Provider
			value={{
				previewData,
				setPreviewData,
			}}
		>
			{children}
		</PreviewContext.Provider>
	);
};
