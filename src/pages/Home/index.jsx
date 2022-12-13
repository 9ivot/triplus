import React from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Navbar from "../../components/Navbar/Navbar";
import { MainContainer } from "../../components/MainContainer";
import Vertical from "../../components/Header/Vertical";
import PostCard from "../../components/PostCard";
import DeleteAlert from "../../components/DeleteAlert";

export default function Home() {
	return (
		<>
			<Header>
				<HeaderTitle>메인 홈페이지입니다.</HeaderTitle>
				<Vertical />
			</Header>
			<MainContainer>
				<PostCard />
				<DeleteAlert />
			</MainContainer>
			<Navbar />
		</>
	);
}
